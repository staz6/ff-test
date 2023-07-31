import { Card, Checkbox } from "flowbite-react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableProvided,
} from "react-beautiful-dnd";
import { ITask } from "../interface/ITask";
import { AiFillDelete } from "react-icons/ai";
interface TaskListProp {
  data: ITask[];
  onStatusChange: (id: string) => void;
  onDelete: (id: string) => void;
  onDragEnd: (sourceIndex: number, destinationIndex: number) => void;
}

const TaskList: React.FC<TaskListProp> = ({
  data,
  onStatusChange,
  onDelete,
  onDragEnd,
}) => {
  const onDragEndResult = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    onDragEnd(result.source.index, result.destination.index);
  };
  return (
    <>
      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="default-heading">Task List</h2>
        </div>
        <DragDropContext onDragEnd={onDragEndResult}>
          <Droppable droppableId="taskList">
            {(provided: any) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {data.map((item, index) =>
                  !item.isDeleted ? (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided: DraggableProvided) => (
                        <ul
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
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
                      )}
                    </Draggable>
                  ) : null
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Card>
    </>
  );
};

export default TaskList;
