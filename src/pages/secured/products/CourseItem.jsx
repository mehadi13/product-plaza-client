import { Button } from "@/components/ui/button"
import { LucideChartColumn, LucideStar, LucideUsers } from "lucide-react"
import { Link } from "react-router-dom"
const CourseItem = ({course}) => {

    return (
  <div className="block rounded-lg p-4 shadow-sm shadow-indigo-400">
  <img
    src={course.img_url}
      alt={course.title}
    
    className="h-56 w-full rounded-md object-cover"
  />

  <div className="mt-2">
    <dl>
      <div>
        <dt className="sr-only">Price</dt>

        <dd className="text-sm text-gray-500">${course.price}</dd>
      </div>

      <div>
        <dt className="sr-only">Title</dt>

        <dd className="font-medium">{course.title}</dd>
      </div>
    </dl>

    <div className="mt-6 flex items-center gap-8 text-xs">
      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <LucideStar/>
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Raitings</p>

          <p className="font-medium">{course.ratings}</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <LucideChartColumn/>

        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Level</p>

          <p className="font-medium">{course.level}</p>
        </div>
      </div>

      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
        <LucideUsers/>
        <div className="mt-1.5 sm:mt-0">
          <p className="text-gray-500">Enrolled By</p>

          <p className="font-medium">{course.student} Students</p>
        </div>
      </div>
    </div>
  </div>
  <Link className="grid items-center mt-4" to={`/products/${course.course_id}`}><Button>View Details</Button></Link>

</div>)
}

export default CourseItem