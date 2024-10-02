import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';

import {
  markAsAread,
  setNotificationFilter,
} from './notificationActionCreators';

describe('should action creators', () => {
  it('should markAsRead', () => {
    const data = {
      type: MARK_AS_READ,
      index: 1,
    };
    const result = markAsAread(1);

    expect(result).toEqual(data);
  });

  it('should setNotificationFilter', () => {
    const data = {
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT',
    };
    const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);

    expect(result).toEqual(data);
  });
});
