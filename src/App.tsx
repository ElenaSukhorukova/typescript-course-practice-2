import { useState } from 'react';
import { type CourseGoalType } from './components/types/CourseGoalType';

import Header from './components/Header';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from "./components/NewGoal";

import goalsImg from './assets/goals.jpg';
import './App.css';

function App() {
    const [goals, setGoals] = useState<CourseGoalType[]>([]);

    function handleAddGoal(goal: string, summary: string) {
        setGoals(prevGoals => {
            const newGoal: CourseGoalType = {
                id: Math.random(),
                title: goal,
                description: summary
            };

            return [...prevGoals, newGoal];
        })
    }

    function handleDeleteGoal(id: number) {
        setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
    }

    return (
        <main>
            <Header image={{ src: goalsImg, alt: 'A list of goals' }} >
                <h1>Your Course Goals</h1>
            </Header>
            <NewGoal onAddGoal={handleAddGoal} />
            <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
        </main>
    )
}

export default App
