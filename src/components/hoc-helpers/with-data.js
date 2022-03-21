import React from "react";
import Loader from "../loader/loader";
import ErrorCompon from "../error-view/error-view";

const withData = (View) => {
  return class extends React.Component {
    state = {
      dataItem: null,
      loading: false,
      error: false,
      //switchComponentFromMobileAndInversely:true,
    };
    itemSelect = (id) => {
      this.setState({ selectedItem: id });
    };
    componentDidMount() {
      this.props
        .getDataSetItemsFromSwapi()
        .then((dataItem) => {
          this.setState({ dataItem, loading: true, error: false });
        })
        .catch((error) => console.log(error));
    }

    componentWillUnmount() {
      this.props.abort();
    }

    render() {
      if (this.state.error) {
        return <ErrorCompon />;
      }
      if (!this.state.loading) {
        return <Loader />;
      }

      return (
        <View
          {...this.props}
          itemSelected={() => this.itemSelect}
          dataItem={this.state.dataItem}
        />
      );
    }
  };
};

export default withData;
