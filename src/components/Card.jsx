import React from "react";
import PropTypes from "prop-types";

const Card = (user) => {
  const { id, email, first_name, last_name, avatar, title } = user.user;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3>{email}</h3>
        <p style={styles.title}>{title}</p>
      </div>
      <div style={styles.body}>
        <div style={styles.avatar}>
          <img src={avatar} alt={`${first_name} ${last_name}`} />
        </div>
        <div style={styles.info}>
          <p style={styles.name}>{`${first_name} ${last_name}`}</p>
          <p style={styles.id}>ID: {id}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    avatar: PropTypes.string,
    title: PropTypes.string,
  }),
};

const styles = {
  container: {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: 5,
    width: "100%",
    margin: "20px 0",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    marginTop: 10,
  },
  body: {
    display: "flex",
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: 20,
  },
  info: {
    display: "flex",
    flexDirection: "column",
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
  },
  id: {
    fontSize: 16,
  },
};

export default Card;
