import { Link } from "react-router-dom";
import type { IUser } from "../../Models/IUser";
import PlanBadge from "../PlanBadge/PlanBadge";

export interface IUserMobileCardProps {
    user: IUser
}

export default function UserMobileCard(props: IUserMobileCardProps) {
    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img className="h-10 w-10 rounded-full object-cover" alt={`${props.user.name} avatar`} src={props.user.avatarUrl} />
                    <div>
                        <p className="font-medium text-text-primary-light dark:text-text-primary-dark">{props.user.name}</p>
                        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">{props.user.username}</p>
                    </div>
                </div>
                <Link
                    to={`/admin/users/${props.user.id}`}
                    className="px-4 py-2 text-sm font-medium rounded-lg text-primary bg-primary/10 transition-colors"
                >
                    Подробнее
                </Link>
            </div>
            <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">User ID:</span>
                    <span className="font-mono">{props.user.id}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">План:</span>
                    <PlanBadge plan={props.user.plan} />
                </div>
                <div className="flex justify-between">
                    <span className="text-text-secondary-light dark:text-text-secondary-dark">Дата регистрации:</span>
                    <span>{props.user.joinedDate}</span>
                </div>
            </div>
        </div>
    );
};