import PropTypes from 'prop-types'

interface StatBadgeProps {
    label: string,
    value: string
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

Object.assign(StatBadge, {
    propTypes: {
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }
})