import { Card, Checkbox } from "flowbite-react";
import { ITask } from "../interface/ITask";
import { AiFillDelete } from "react-icons/ai";
interface TaskListProp {
  data: ITask[];
  onStatusChange: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProp> = ({ data, onStatusChange, onDelete }) => {
  return (
    <>
      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="default-heading">Task List</h2>
        </div>
        <div className="flow-root">
          {data.map((item) =>
            !item.isDeleted ? (
              <ul
                key={`${item.id}`}
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="shrink-0 cursor-pointer">
                      <Checkbox
                        id="complete"
                        defaultChecked={item.completed}
                        onClick={() => {
                          onStatusChange(item.id);
                        }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        {item.title}
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                    <div className="inline-flex items-center">
                      <AiFillDelete
                        className="text-lg text-red-600 cursor-pointer"
                        onClick={() => {
                          onDelete(item.id);
                        }}
                      />
                    </div>
                  </div>
                </li>
              </ul>
            ) : null
          )}
        </div>
      </Card>
    </>
  );
};

export default TaskList;
