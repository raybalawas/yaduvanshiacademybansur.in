import { useEffect, useState } from "react";
import axios from "axios";

const AdminUsers = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [admitCard, setAdmitCard] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const studentsPerPage = 10;

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(
        "https://yaduvanshiacademybansur-backend.vercel.app/api/talent-exam/registrations",
      );

      if (res.data.success) {
        const chunkSize = 10;
        const chunks = [];

        for (let i = 0; i < res.data.data.length; i += chunkSize) {
          chunks.push(res.data.data.slice(i, i + chunkSize));
        }

        setStudents(chunks[0]); // first 10
        setStudentChunks(chunks); // store all chunks
      }
    } catch (error) {
      console.error("API Error:", error);
    }

    setLoading(false);
  };

  // const generateAdmitCard = async (phone) => {
  //   try {
  //     const res = await axios.post(
  //       "https://yaduvanshiacademybansur-backend.vercel.app/api/talent-exam/admit-card",
  //       { phone },
  //       { responseType: "blob" },
  //     );

  //     const url = window.URL.createObjectURL(new Blob([res.data]));

  //     const link = document.createElement("a");

  //     link.href = url;
  //     link.download = "admit-card.pdf";

  //     document.body.appendChild(link);
  //     link.click();
  //     link.remove();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const generateAdmitCard = async (phone) => {
    try {
      const res = await axios.post(
        "https://yaduvanshiacademybansur-backend.vercel.app/api/talent-exam/admit-card",
        { phone },
        {
          responseType: "blob", // IMPORTANT
        },
      );

      const file = new Blob([res.data], { type: "application/pdf" });

      const fileURL = URL.createObjectURL(file);

      const newWindow = window.open(fileURL);

      newWindow.onload = () => {
        newWindow.print(); // auto open printer dialog
      };
    } catch (error) {
      console.error("Admit card error:", error);
    }
  };

  // Search filter
  const filteredStudents = students.filter((student) =>
    student.name?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Pagination logic
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent,
  );

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-6">Talent Exam Registrations</h1>

      {/* Search Box */}

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by student name..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="border p-2 rounded w-80"
        />
      </div>

      {loading && <p>Loading students...</p>}

      {!loading && (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-2">Name</th>
                <th className="border p-2">Father</th>
                <th className="border p-2">Phone</th>
                <th className="border p-2">Class</th>
                <th className="border p-2">Address</th>
                {/* <th className="border p-2">Status</th> */}
                <th className="border p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {currentStudents.map((student) => (
                <tr key={student._id}>
                  <td className="border p-2">{student.name}</td>
                  <td className="border p-2">{student.fName}</td>
                  <td className="border p-2">{student.phone}</td>
                  <td className="border p-2">{student.class}</td>
                  <td className="border p-2">{student.address}</td>
                  {/* <td className="border p-2">{student.status}</td> */}

                  <td className="border p-2">
                    <button
                      onClick={() => generateAdmitCard(student.phone)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded cursor-pointer"
                    >
                      Admit Card
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}

          <div className="flex justify-center mt-6 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${
                  currentPage === i + 1 ? "bg-indigo-600 text-white" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {admitCard && (
        <div className="mt-10 bg-white border p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Admit Card Preview</h2>

          <div dangerouslySetInnerHTML={{ __html: admitCard }} />
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
