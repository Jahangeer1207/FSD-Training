async function loadCourses() {
    try {
        // Fetch from Express backend
        const response = await fetch("http://localhost:5000/courses");
        const courses = await response.json();

        const container = document.getElementById("courseContainer");

        container.innerHTML = "";

        courses.forEach(course => {

            let imageUrl = "";

            switch (course.name) {
                case "Web Development":
                    imageUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800";
                    break;

                case "Python Programming":
                    imageUrl = "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800";
                    break;

                case "Data Science":
                    imageUrl = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800";
                    break;

                case "AI & Machine Learning":
                    imageUrl = "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800";
                    break;

                case "Java Programming":
                    imageUrl = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800";
                    break;

                case "Cloud Computing":
                    imageUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800";
                    break;

                default:
                    imageUrl = "https://via.placeholder.com/400x250";
            }

            container.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card h-100 shadow">

                        <img
                            src="${imageUrl}"
                            class="card-img-top"
                            alt="${course.name}"
                        >

                        <div class="card-body">

                            <h5 class="card-title">
                                ${course.name}
                            </h5>

                            <p>
                                <strong>Duration:</strong>
                                ${course.duration}
                            </p>

                            <p>
                                <strong>Fee:</strong>
                                ₹${course.fee}
                            </p>

                            <a href="register.html"
                               class="btn btn-primary">
                                Enroll Now
                            </a>

                        </div>
                    </div>
                </div>
            `;
        });

    } catch (error) {

        console.error(error);

        document.getElementById("courseContainer").innerHTML =
            "<h3 class='text-danger text-center'>Unable to load courses.</h3>";
    }
}

loadCourses();