import { type ReactNode } from 'react';
import { type CourseGoalType } from './types/CourseGoalType';

import CourseGoal from './CourseGoal';
import InfoBox from './InfoBox';

type CourseGoalListProps = {
    goals: CourseGoalType[];
    onDeleteGoal: (id: number) => void
};

export default function CourseGoalList({
    goals,
    onDeleteGoal
}: CourseGoalListProps) {
    if (goals.length === 0) {
        return <InfoBox mode="hint">
            You have no course goals yet. Start adding some!
        </InfoBox>
    }

    let warningBox: ReactNode;

    if (goals.length >= 4 ) {
        warningBox = (
            <InfoBox mode="warning" severity="high">
            You're collecting a lot of goals. Don't put too much on your plate!
        </InfoBox>
        );
    }

    return (
        <>
            {warningBox}
            <ul>
                {goals.map(({id, title, description}) => (
                    <li key={id}>
                        <CourseGoal id={id} title={title} onDelete={onDeleteGoal} >
                            {description}
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    )
}
