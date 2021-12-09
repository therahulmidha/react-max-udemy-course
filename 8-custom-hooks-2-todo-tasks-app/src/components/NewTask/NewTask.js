import useHttp from "../../hooks/use-http";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { error, isLoading, sendRequest } = useHttp();

  const processData = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    await sendRequest(
      {
        url: "https://react-max-course-4a914-default-rtdb.firebaseio.com/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      processData.bind(null, taskText)
      // ^ usage of method binding
      // attaching an argument to the function being sent not called
    );
    // setIsLoading(true);
    // setError(null);
    // try {
    //   const response = await fetch(
    //     'https://react-max-course-4a914-default-rtdb.firebaseio.com/tasks.json',
    //     {
    //       method: 'POST',
    //       body: JSON.stringify({ text: taskText }),
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     }
    //   );

    //   if (!response.ok) {
    //     throw new Error('Request failed!');
    //   }

    //   const data = await response.json();

    // const generatedId = data.name; // firebase-specific => "name" contains generated id
    // const createdTask = { id: generatedId, text: taskText };

    // props.onAddTask(createdTask);
    // } catch (err) {
    //   setError(err.message || 'Something went wrong!');
    // }
    // setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
