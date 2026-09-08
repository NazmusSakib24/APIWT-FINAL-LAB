import PropTypes from 'prop-types'

interface DashboardHeaderProps {
    title: string,
    tagline: string
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
            </header>
        </>
    )
}

Object.assign(DashboardHeader, {
    propTypes: {
        title: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired
    }
})