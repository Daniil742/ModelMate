export interface IInfoRowProps {
    label: string;
    children: React.ReactNode;
};

export default function InfoRow(props: IInfoRowProps) {
    return (
        <>
            <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark">
                {props.label}
            </p>
            <div className="text-sm text-text-primary-light dark:text-text-primary-dark font-medium">
                {props.children}
            </div>
        </>
    );
};