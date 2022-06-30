import store from '../redux/store';
//

describe('country redux state test', () => {
  it('Should initially set county to an empty array', () => {
    const state = store.getState().covid;
    expect(state.countries).toEqual([]);
  });
});
