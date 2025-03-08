import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
}

export default function NewGoal({onAddGoal}: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // new FormData(event.currentTarget)
    const eneteredGoal = goal.current!.value
    const eneteredSummary = summary.current!.value

    event.currentTarget.reset();
    onAddGoal(eneteredGoal, eneteredSummary);
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="goal">Your goal</label>
      <input id="goal" type="text" name="goal" ref={goal} />
    </div>
    <div>
      <label htmlFor="summary">Summary</label>
      <input id="summary" type="text" name="summary" ref={summary}  />
    </div>
    <div>
      <button>Add Goal</button>
    </div>
  </form>
}
