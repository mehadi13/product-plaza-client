
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { API_URL } from "@/Constant";
import { toast } from "@/hooks/use-toast";
import { LucideAward, LucideBadgeDollarSign, LucideChartColumn, LucideClock, LucideNotebookPen, LucideStar, LucideStars, LucideStickyNote, LucideUsers } from "lucide-react";
import { useLoaderData } from "react-router-dom";


const CourseDetails = () => {

    const course = useLoaderData()

    const { img_url, title, author, ratings, lession, price, duration, student, level, assessments } = course;

    return <>
        <div className="grid grid-cols-1 py-10 gap-6">
            <span className="text-lg font-medium text-gray-900 block text-center">{title}</span> {/* Course title */}
            <div className="flex justify-center">
                <img
                    src={img_url} // img_url from the JSON data
                    alt={title} // title of the course used as alt text
                    className="sm:h-96 max-h-screen"
                />
            </div>
            <Separator />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-9">
                <div className="space-y-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <LucideNotebookPen />
                            <span className="font-medium">{author}</span>
                        </div>
                        <span className="block text-sm text-gray-600">Author</span>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <LucideClock />
                            <span className="font-medium">{duration}</span>
                        </div>
                        <span className="block text-sm text-gray-600">Duration</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <LucideBadgeDollarSign />
                            <span className="font-medium">{price}</span>
                        </div>
                        <span className="block text-sm text-gray-600">Price</span>
                    </div>

                    <div>
                        <div className="flex items-center gap-2">
                            <LucideStar />
                            <span className="font-medium">{ratings}</span>
                        </div>
                        <span className="block text-sm text-gray-600">Raiting</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <LucideChartColumn />
                            <span className="font-medium">{level}</span>
                        </div>
                        <span className="block text-sm text-gray-600">Level</span>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <LucideUsers />
                            <span className="font-medium">{student}</span>
                        </div>
                        <span className="block text-sm text-gray-600">Students</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <LucideAward />
                            <span className="font-medium">{assessments}</span>
                        </div>
                        <span className="block text-sm text-gray-600">Assessments</span>
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <LucideStickyNote />
                            <span className="font-medium">{lession}</span>
                        </div>
                        <span className="block text-sm text-gray-600">Lessions</span>
                    </div>
                </div>
            </div>


            {/* Buttons for Wishlist and Cart */}
            <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-8">
                <Button variant="outline"
                    className="w-full p-4 text-sm font-medium transition hover:scale-105 shadow-lg"
                    onClick={() => toast({ title: 'Prewiew', description: "We are working on this." })}
                >
                    Preview
                </Button>
                <Button
                    className="w-full p-4 text-sm font-medium transition hover:scale-105 shadow-lg"
                    onClick={() => toast({ title: 'Add to Cart', description: `${title} has been successfully added to the Cart.` })}
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    </>
}

export const courseDetailsLoader = async ({ params }) => {
    const response = await fetch(`${API_URL}/courses/${params.id}`);

    if (!response.ok) {
        throw Error("Could not fetch courses.")
    }

    return response.json();
}

export default CourseDetails;