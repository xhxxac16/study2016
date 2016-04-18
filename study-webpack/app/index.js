var React = require('react/addons');

module.exports = React.createClass({
	mixins:[React.addons.LinkedStateMixin],
	render() {
		var todoItems = this.state.todoItems;
		var owner = this.state.owner;

		return <div>
					<div className='ChangeOwner'>
						<input type='text' valueLink={this.linkeState('owner')} />
					</div>

					<div className='TodoItems'>
						<ul>
							{todoItems.map((todoItem, i) =>
								<li key={'todoitem' + i}>
									<TodoItem owner={owner} task={todoItem.task} />
								</li>
							)}
						</ul>
					</div>
				</div>;
	},
});