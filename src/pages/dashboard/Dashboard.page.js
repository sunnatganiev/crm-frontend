import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TicketTable from "../../components/ticket-table/TicketTable.comp";
import tickets from '../../assets/data/dummy-tickets.json'
import PageBreadcrumb from "../../components/breadcrumb/Breadcrumb";
import { LinkContainer } from "react-router-bootstrap";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboar" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <LinkContainer to="/add-ticket">
            <Button
              variant="info"
              className="text-light"
            >
              Add New Ticket
            </Button>
          </LinkContainer>

        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3 mb-2">
          <div>Total tickets: 50</div>
          <div>Pending tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3 mb-2">Recently Added tickets</Col>
      </Row>
      <hr />
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
