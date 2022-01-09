import { Component } from 'react';

export class Tabs extends Component {
  state = { activeTabIdx: 0 };

  // Так же можно это реализовать с помощь встроеной конструкции Reactпутем наследуя, пример
  // export class Tabs extends PureComponent вместо Component.
  // Если происходит подобное наследование метод ниже не имеет никакого значения!
  // Используется с целью предотвращения лишниго ре-рендера.
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTabIdx !== this.state.activeTabIdx;
  }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log('render');

    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];
    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button type="button" key={item.label} onClick={() => this.setActiveTabIdx(idx)}>
              {item.label}
            </button>
          ))}
        </div>
        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
//   <button type="button" key={item.label} onClick={() => this.setActiveTabIdx(idx)}>
//     {item.content}
//   </button>
// ))}
