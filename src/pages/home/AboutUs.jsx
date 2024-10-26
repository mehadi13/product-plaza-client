import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

function AboutUs() {
  return (
    <section className="flex justify-center items-center py-12 bg-gray-50">
      <Card className="max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">
            About Us
          </CardTitle>
          <CardDescription className="text-lg text-gray-600">
            Empowering learners worldwide through high-quality, flexible, and accessible online courses.
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center text-gray-700 mt-6">
          <p className="mb-4">
            At <span className="font-bold">SkillUp</span>, our mission is to provide learners of all backgrounds with the knowledge and skills they need to succeed in today's fast-paced world. Our platform offers a wide range of courses in technology, business, design, and more.
          </p>
          <p className="mb-4">
            Whether you're looking to upskill in your current role or explore new career opportunities, we are here to help you reach your full potential. We partner with industry-leading experts and institutions to bring you the best learning experience.
          </p>
          <p className="font-bold">
            Join us and start learning today!
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

export default AboutUs;
