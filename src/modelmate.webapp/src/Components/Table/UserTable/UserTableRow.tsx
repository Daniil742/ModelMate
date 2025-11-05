import { Link } from "react-router-dom";
import type { IUser } from "../../../Models/IUser";
import PlanBadge from "../../PlanBadge/PlanBadge";

export interface IUserTableRowProps {
    user: IUser
}

export default function UserTableRow(props: IUserTableRowProps) {
    return (
        <tr className="hover:bg-background-light dark:hover:bg-background-dark/50 transition-colors">
            <td className="p-4 font-mono text-sm text-text-secondary-light dark:text-text-secondary-dark">
                {props.user.id}
            </td>
            <td className="p-4">
                <div className="flex items-center gap-3">
                    <img className="h-10 w-10 rounded-full object-cover" alt={`${props.user.name} avatar`} src={props.user.avatarUrl} />
                    <div>
                        <p className="font-medium text-text-primary-light dark:text-text-primary-dark">{props.user.name}</p>
                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{props.user.username}</p>
                    </div>
                </div>
            </td>
            <td className="p-4">
                <PlanBadge plan={props.user.plan} />
            </td>
            <td className="p-4 text-text-secondary-light dark:text-text-secondary-dark">
                {props.user.joinedDate}
            </td>
            <td className="p-4 text-right">
                <Link
                    to={`/admin/users/${props.user.id}`}
                    className="px-4 py-2 text-sm font-medium rounded-lg text-primary hover:bg-primary/10 transition-colors"
                >
                    Подробнее
                </Link>
            </td>
        </tr>
    );
};