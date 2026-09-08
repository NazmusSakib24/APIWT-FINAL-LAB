interface StatBadgeProps {
    label: string,
    value: string,
}

export default function StatBadge(stat: StatBadgeProps) {

    return (
        <>
            <span>
                {stat.label}: {stat.value}
            </span>
        </>
    )
}