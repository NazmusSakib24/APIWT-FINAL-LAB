import PropTypes from 'prop-types'
import StatBadge from './StatBadge'

interface DashboardHeaderProps {
    title: string,
    tagline: string,
    favourites: number
}

export default function DashboardHeader(header: DashboardHeaderProps) {
    return (
        <>
            <header>
                <h1>{header.title}</h1>
                <p>{header.tagline}</p>

                <nav>
                    <a href="#">Dashboard</a>
                    <a href="#">Students</a>
                    <a href="#">Courses</a>
                </nav>
                <StatBadge
                    label="Students"
                    value="4"
                />
                <StatBadge
                    label="favourites"
                    value={header.favourites.toString()}
                />
            </header>
        </>
    )
}

Object.assign(DashboardHeader, {
    propTypes: {
        title: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        favorites: PropTypes.number.isRequired
    }
})