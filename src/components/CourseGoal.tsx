// import { type ReactNode } from "react";

import { type FC, type PropsWithChildren } from "react";

// type CourseGoalProps = {
//     title: string;
//     description: string;
//     children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
    title: string,
    id: number;
    onDelete: (id: number) => void
}>;

// export default function CourseGoal({
//     title,
//     description,
//     children,
// }: CourseGoalProps) {
//     return <article>
//         <div>
//             <h2>{title}</h2>
//             <p>{description}</p>
//         </div>
//         <div>{children}</div>
//         <button>Delete</button>
//     </article>
// }

const CourseGoal: FC<CourseGoalProps> = ({ id, title, onDelete, children }) => {
    return <article>
        <div>
            <h2>{title}</h2>
        </div>
        <div>{children}</div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
}

export default CourseGoal;