import { render } from "@testing-library/react";
import Row from "reactstrap/lib/Row";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
} from "reactstrap";

const { Component } = require("react");

class CampsiteInfo extends Component {
    renderCampsite(campsite) {
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
    render() {
        if (this.props.campsite) {
            return (
                <div className="row">
                    {" "}
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            );
        } else {
            return <div />;
        }
    }
    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map((comment) => (
                        <div key={comment.id}>
                            {" "}
                            {comment.text} {comment.author}{" "}
                            {new Intl.DateTimeFormat("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "2-digit",
                            }).format(new Date(Date.parse(comment.date)))}
                        </div>
                    ))}
                </div>
            );
        }
        return(<div />)
    }
}
export default CampsiteInfo;
