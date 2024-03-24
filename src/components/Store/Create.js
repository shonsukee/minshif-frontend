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
					<h1 class="text-4xl font-bold m-10">グループを新規作成</h1>
					<GroupTextBox name={'店舗名を入力'} />
					<div className="flex justify-end my-10">
						<SubmitButton name={'作成'} />
					</div>
				</div>
				<div>
					<a href="/group/join">
						<span className="text-blue-800">グループに参加</span>
					</a>
				</div>
			</div>
		</>
	);
};
