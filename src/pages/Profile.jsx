import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { API_URL } from "@/Constant";
import { toast } from "@/hooks/use-toast";
import { getUserData } from "@/storage";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Profile = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    role: "",
    profilePicture: "",
    firebaseId: ""
  });

  useEffect(()=>{
    const userdata = getUserData();
    if(userdata)
        setForm(userdata)
    console.log(userdata)
  }, [])

  const updateForm = (updatedValues) => {
    setForm((prev) => ({
      ...prev,
      ...updatedValues,
    }));
  };

  const [imageFile, setImageFile] = useState(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate()

  const handleFileChange = (event) => {
    setImageFile(event.target.files[0]);
    const fileReader = new FileReader();
    fileReader.onload = () => {
        setImage(fileReader.result); // Set the new image preview
    };
    fileReader.readAsDataURL(event.target.files[0]); // Read the new file
};

const removeImage = () => {
    setImage(null); // Clear the image
    setImageFile(null); // Clear the file input
};

  const handleProfileUpdateSubmit = async(e) => {
    e.preventDefault();
    const imageUrl = await uploadImage();
        const finalImageUrl = imageUrl || image; // Use new image URL or previous one

        const profile = {
            ...form,
            profilePicture: finalImageUrl, // Add the image URL to product data
        };


        saveUserToDb(profile)
    
  };

  const saveUserToDb = async(user) => {
    try {
      let response = await fetch(`${API_URL}/api/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        toast({
          variant: "destructive",
          title: "Update error",
          description: "An error occurred during profile update.",
        });
      }

      toast({
        variant: "success",
        title: "Update successful!",
        description: "You have successfully updated your account.",
      });

      navigate("/");
    } catch (err) {
      console.error(err);
      toast({
        variant: "destructive",
        title: "Error",
        description: err.message || "An error occurred during profile update.",
      });
    }
  }

  const uploadImage = async () => {
    if (!imageFile) return null; // Skip upload if no image file
    const formData = new FormData();
    formData.append("api_key", "a69271f42760ca50404e5999b41227cd");
    formData.append("file", imageFile);

    try {
        const response = await fetch("https://api.imghippo.com/v1/upload", {
            method: "POST",
            body: formData,
        });
        const result = await response.json();
        if (result.success) {
            return result.data.url; // Return the uploaded image URL
        } else {
            console.error("Image upload failed:", result.message);
            return null;
        }
    } catch (error) {
        console.error("Error uploading image:", error);
        return null;
    }
};

  return (
    <div className="mx-auto max-w-lg my-2">
      <CardHeader>
        <CardTitle className="text-xl">Edit Profile</CardTitle>
        <CardDescription className="grid grid-cols-1 gap-2">
          Update your information to keep your profile up to date
          <Separator/>
          <div>
                <Label>Profile Image</Label>
                {image && (
                    <div className="relative mb-4">
                        <img src={image} alt="Profile Image" className="object-cover rounded" />
                        <Button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                        >
                            &times;
                        </Button>
                    </div>
                )}

                {/* File input for uploading a new image */}
                <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required={!image} // Make required if no image is uploaded yet
                />
               </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <form onSubmit={handleProfileUpdateSubmit} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="Max"
                  value={form.firstName}
                  onChange={(e) => updateForm({ firstName: e.target.value })}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Robinson"
                  value={form.lastName}
                  onChange={(e) => updateForm({ lastName: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="mobile">Mobile No</Label>
              <Input
                id="mobile"
                type="tel" // Changed to tel for mobile numbers
                placeholder="01234567890"
                value={form.mobile}
                onChange={(e) => updateForm({ mobile: e.target.value })}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="address">Address</Label>
              <Textarea
                id="address"
                placeholder="Type your address"
                value={form.address}
                onChange={(e) => updateForm({ address: e.target.value })}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Update Profile
            </Button>
          </form>
        </div>
        <div className="mt-4 text-center text-sm">
          Want to go back?{" "}
          <Link to="/" className="underline">
            Home
          </Link>
        </div>
      </CardContent>
    </div>
  );
};

export default Profile;
