import "../../output.css";
import Headers from "../Partials/_home_header";
import SubmitButton from '../Partials/_submit_button'
import GroupTextBox from '../Partials/_group_text_box'

export default function GroupCreate() {
	return (
		<>
			<Headers />
			<div className="text-center w-fit mx-auto">
				<div>
					<h1 class="text-4xl font-bold m-10">グループに参加</h1>
					<GroupTextBox name={'グループIDを入力'} />
					<div className="flex justify-end my-10">
						<SubmitButton name={'参加'} />
					</div>
				</div>
				<div>
					<a href="/group/create">
						<span className="text-blue-800">グループを新規作成</span>
					</a>
				</div>
			</div>
		</>
	);
};
