export const fetchUsers = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  console.log(data);
  return data;
};

export const fetchTodos = async (userId: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/todos`
  );
  const data = await res.json();
  console.log(data);
  return data;
};
