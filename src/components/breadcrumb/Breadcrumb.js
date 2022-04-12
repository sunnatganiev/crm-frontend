import { Breadcrumb } from "react-bootstrap"

const PageBreadcrumb = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default PageBreadcrumb