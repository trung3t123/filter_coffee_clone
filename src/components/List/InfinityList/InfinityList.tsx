import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  RefreshControl,
  View,
} from 'react-native';
import config from './config';
import NotFound from '../NotFound';
import CommonStyles from 'theme/CommonStyles';
import { ApiResultListData } from 'data/home/types';
import Colors from 'utils/colors';
import CommonHeights from 'theme/CommonHeights';

const { FETCH_STATUS, PAGE_LIMIT } = config;

interface PropTypes extends FlatListProps<never> {
  onEndReachedThreshold: number;
  fetchData: (offset: number, limit?: number) => Promise<ApiResultListData>;
  emptyMessage?: string;
  handleData?: (data: never[]) => never[];
}

class InfinityList extends React.Component<PropTypes> {
  state = {
    fetchStatus: FETCH_STATUS.IDLE,
    data: [] as never[],
    pagination: { total: 0 },
  };

  fetchedData = [];
  mounted = false;

  componentDidMount() {
    this.mounted = true;
    this.fetchNew();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  fetchNew = async () => {
    const { fetchData, handleData } = this.props;
    const { fetchStatus } = this.state;

    if (fetchStatus !== FETCH_STATUS.IDLE) {
      return;
    }

    this.setState({
      data: [],
      pagination: {},
      fetchStatus: FETCH_STATUS.REFRESH,
    });

    const { data, pagination, error } = await fetchData(0, PAGE_LIMIT);

    if (this.mounted && !error) {
      this.fetchedData = data || [];

      this.setState({
        data: handleData ? handleData(this.fetchedData) : this.fetchedData,
        pagination: pagination,
        fetchStatus: FETCH_STATUS.IDLE,
      });
    }
    if (error) {
      this.setState({
        fetchStatus: FETCH_STATUS.ERROR,
      });
    }
  };

  fetchNext = async () => {
    const { fetchStatus, pagination: currentPagination } = this.state;
    const offsetQuery = this.fetchedData.length;

    if (fetchStatus !== FETCH_STATUS.IDLE) {
      return;
    }
    if (offsetQuery >= currentPagination?.total) {
      return;
    }

    const { fetchData, handleData } = this.props;
    this.setState({ fetchStatus: FETCH_STATUS.LOAD_MORE });
    const { data, pagination, error } = await fetchData(
      offsetQuery,
      PAGE_LIMIT,
    );
    const incomeData = data || [];
    if (this.mounted && !error) {
      this.fetchedData = [...this.fetchedData, ...incomeData];
      this.setState({
        data: handleData ? handleData(this.fetchedData) : this.fetchedData,
        pagination: pagination,
        fetchStatus: FETCH_STATUS.IDLE,
      });
    }
    if (error) {
      this.setState({
        fetchStatus: FETCH_STATUS.ERROR,
      });
    }
  };

  onRefresh = () => {
    this.fetchNew();
  };

  onEndReached = () => {
    this.fetchNext();
  };

  renderListEmpty = () => {
    const { emptyMessage, ListEmptyComponent } = this.props;
    const { fetchStatus } = this.state;

    if (fetchStatus === FETCH_STATUS.IDLE) {
      if (ListEmptyComponent) {
        return ListEmptyComponent;
      }
      return <NotFound title={emptyMessage} />;
    }

    return null;
  };

  renderFooter = () => {
    const { fetchStatus } = this.state;

    return (
      <View
        style={{
          minHeight: CommonHeights.res90,
          paddingBottom: CommonHeights.res80,
        }}>
        {fetchStatus === FETCH_STATUS.LOAD_MORE && (
          <ActivityIndicator
            size="large"
            color={Colors.white}
            style={CommonStyles.activityIndicator}
          />
        )}
      </View>
    );
  };

  render() {
    const { ...rest } = this.props;
    const { data, fetchStatus } = this.state;

    return (
      <FlatList
        {...rest}
        data={data}
        refreshControl={
          <RefreshControl
            tintColor={Colors.white}
            size={30}
            onRefresh={this.onRefresh}
            refreshing={fetchStatus === FETCH_STATUS.REFRESH}
          />
        }
        onEndReached={this.onEndReached}
        ListEmptyComponent={this.renderListEmpty()}
        ListFooterComponent={this.renderFooter()}
      />
    );
  }

  static defaultProps = {
    onEndReachedThreshold: 0.2,
    emptyMessage: '',
    // handleData: (data: never[]) => data,
    ListEmptyComponent: undefined,
  };
}

export default InfinityList;
