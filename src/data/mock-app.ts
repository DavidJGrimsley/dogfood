export interface AppTask {
  id: string;
  title: string;
  status: "todo" | "doing" | "done";
}

export const appSnapshot = {
  name: "dogfood",
  audience: "Expo app users",
  tasks: [
    { id: 'task-1', title: 'Shape the first user flow', status: 'doing' },
    { id: 'task-2', title: 'Replace mock data with the real data layer', status: 'todo' },
    { id: 'task-3', title: 'Run mrdj doctor before pushing', status: 'todo' },
  ] satisfies AppTask[],
};
