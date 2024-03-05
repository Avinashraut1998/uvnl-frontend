import { FaEdit, FaEye } from "react-icons/fa";
import DeleteButton from "./DeleteButton";
import { useLeads } from "../../context/LeadContext";
import { useNavigate } from "react-router-dom";
import CreateOppotunityModel from "./CreateOppotunityModel";

const ViewOpportunites = () => {
  const { leads } = useLeads();

  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between items-center text-title-lg mb-3   ">
        <h1 className="text-black dark:text-white">Opportunities</h1>
        <CreateOppotunityModel />
      </div>
      <div className="">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-bodydark  text-left dark:bg-meta-4">
                <th className="min-w-[100px]  py-4 px-4 font-bold text-black dark:text-white xl:pl-11">
                  Name
                </th>

                <th className="min-w-[100px] py-4 px-4 font-bold text-black dark:text-white">
                  Mobile Number
                </th>
                <th className="min-w-[100px] py-4 px-4  font-bold text-black dark:text-white">
                  Email
                </th>
                <th className=" min-w-[100px] py-4 px-4 font-bold text-center text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.length !== 0 ? (
                leads?.map((lead) => (
                  <tr className="  dark:bg-meta-4" key={lead._id}>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {lead.firstName} {lead.lastName}
                    </td>

                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {lead.number}
                    </td>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                      {lead.email}
                    </td>
                    <td className="border-b border-[#eee] py-3 px-2 pl-9  dark:border-strokedark xl:pl-11">
                      <div className="flex gap-2 justify-center  ">
                        <button
                          onClick={() => navigate(`/user/lead/${lead._id}`)}
                        >
                          {<FaEye />}
                        </button>
                        <button
                          onClick={() =>
                            navigate(`/user/lead/edit/${lead._id}`)
                          }
                        >
                          {<FaEdit />}
                        </button>
                        <DeleteButton onDelete={() => handleDelete(lead._id)} />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="  dark:bg-meta-4">
                  <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                    empty
                  </td>

                  <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                    empty
                  </td>
                  <td className="border-b border-[#eee] py-3 px-2 pl-9 dark:border-strokedark xl:pl-11">
                    empty
                  </td>
                  <td className="border-b border-[#eee] py-3 px-2 pl-9  dark:border-strokedark xl:pl-11">
                    empty
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ViewOpportunites;