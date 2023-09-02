import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const ContactData = ({ data, value, link }) => {
  return (
    <li className="my-3">
      <Link
        to={link}
        style={{
          color: "black",
          textDecoration: "none"
        }}>
        <b>{data}:</b> {value}
      </Link>
    </li>
  );
};

ContactData.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  link: PropTypes.string
};
