import React from "react";

import Loader from "../loader/loader";
import "./item-details.css";

const BlockItemText = ({ state, field, label }) => {
  return (
    <li>
      {label} {state.loadingImg ? state[field] : "...."}
    </li>
  );
};
export { BlockItemText };
export default class ItemDetails extends React.Component {
  state = {
    id: null,
    image: null,
    loadingImg: false,
    loading: true,
    renderError: false,
    selectedItem: null,
  };
  refImga = React.createRef();

  catchRefer = (refer) => {
    if (this.state.image) {
      refer.current.onload = () => {
        this.setState({ loadingImg: true });
      };
    }
  };

  onUpdate = (data) => {
    this.setState(data);
    this.setState({ loading: false });
    this.setState({ loadingImg: false });
    this.setState({ image: this.props.dataImage(this.state.id) });
    this.catchRefer(this.refImga);
  };

  updateItem() {
    const { selectedItem, getData, abort } = this.props;
    this.setState({ image: null });
    this.setState({ loadingImg: false });
    if (!this.state.loading) {
      abort();
    }
    getData(selectedItem).then(this.onUpdate);
  }

  componentDidMount() {
    if (this.props.selectedItem != null) {
      this.setState({ selectedItem: this.props.selectedItem, loading: true });
      this.updateItem();
    }
  }

  componentDidUpdate(prevP) {
    if (this.props.getData !== prevP.getData) {
      this.setState({ selectedItem: null });
    }
    if (this.props.selectedItem !== prevP.selectedItem) {
      this.updateItem();
      this.setState({ selectedItem: this.props.selectedItem });
    }
  }

  throwError = () => {
    this.setState({ renderError: true });
  };

  componentWillUnmount() {
    this.setState({ image: null });
    this.props.abort();
  }

  render() {
    const { loadingImg } = this.state;
    const { state } = this;
    if (this.state.renderError) {
      this.foo.bar = 0;
    }

    if (!this.state.selectedItem) {
      return (
        <div className="empty">
          <p>Выбери персонажа</p>
        </div>
      );
    }

    if (this.state.loading) {
      return <Loader />;
    }
    const styleVisible =
      loadingImg && this.state.image
        ? { display: "block" }
        : { display: "none" };
    return (
      <div className="person-details">
        <img
          src={this.state.image}
          alt="starswars"
          style={styleVisible}
          ref={this.refImga}
        />
        {!loadingImg && <Loader />}
        {/* {!this.state.image &&<Loader />} */}
        <ul>
          {React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, { state }); /////////////штука которая присваивает нужному чаилду свойство любого обьекта который есть на этой странице
          })}
        </ul>

        <button onClick={this.throwError}>throw error</button>
      </div>
    );
  }
}
