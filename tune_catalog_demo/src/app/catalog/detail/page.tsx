"use client";

import { Typography, Select, Button, Radio, RadioChangeEvent } from "antd";

import { useState } from "react";
import Link from "next/link";

const { Title } = Typography;

const filterOption = (
	input: string,
	option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

function DetailPage() {
	const [stockColor, setStockColor] = useState<string>("");
	const [state1Color, setState1Color] = useState<string>("");
	const [state2Color, setState2Color] = useState<string>("");

	const [value, setValue] = useState<string>("Stage 1");

	const onChange = (e: RadioChangeEvent) => {
		setValue(e.target.value);
	};

	return (
		<div className="container mx-auto mt-[70px] w-[1268px]">
			<Title
				className="font-semibold"
				style={{ fontSize: "48px", fontWeight: 600 }}
			>
				Tune Catalog
			</Title>
			<div
				className="bg-[#ffffff]"
				style={{
					boxShadow: "0 4px 15px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.1)",
					borderRadius: "0.25rem",
				}}
			>
				<div
					className="px-[16px] py-[8px]"
					style={{
						borderBottom: "1px solid #dae0fe",
					}}
				>
					<Select
						className="text-[18px] font-medium"
						showSearch
						variant="borderless"
						placeholder="Select Make"
						optionFilterProp="children"
						filterOption={filterOption}
					/>
					{" / "}
					<Select
						className="text-[18px] font-medium"
						showSearch
						variant="borderless"
						placeholder="Select Year"
						optionFilterProp="children"
						filterOption={filterOption}
					/>
					{" / "}
					<Select
						className="text-[18px] font-medium"
						showSearch
						variant="borderless"
						placeholder="Select Model"
						optionFilterProp="children"
						filterOption={filterOption}
					/>
					{" / "}
					<Select
						className="text-[18px] font-medium"
						showSearch
						variant="borderless"
						placeholder="Select Engine"
						optionFilterProp="children"
						filterOption={filterOption}
					/>
					{" / "}
					<Select
						className="text-[18px] font-medium"
						showSearch
						variant="borderless"
						placeholder="Select Transmission"
						optionFilterProp="children"
						filterOption={filterOption}
					/>
				</div>

				<div
					className="bg-[#f6f7ff] px-[8px] py-[4px]"
					style={{
						borderBottom: "1px solid #dae0fe",
					}}
				>
					<Button
						className="mx-[8px] my-[8px] px-[16px] py-[4px] bg-[#dae0fe] border-[#2744f6] text-[18px] font-semibold
											inline-flex items-center justify-center"
					>
						ECU Tunes
					</Button>
					<Button className="mx-[8px] my-[8px] px-[16px] py-[4px] text-[18px] font-semibold inline-flex items-center justify-center">
						<Link href={"/guide"}>Technical Details</Link>
					</Button>
				</div>

				<div className="flex flex-row">
					<div className="w-[846px] h-[550px]">
						<div className="p-[16px]">
							<h2 className="text-[28px] leading-[28px] font-semibold">
								ECU Tunes
							</h2>
							<p className="text-[#6a737d] mb-[0.75rem]">Select a tune</p>
							<div className="mb-[12px]">
								<Radio.Group
									className="flex justify-between mb-[0.75rem]"
									value={value}
									onChange={onChange}
								>
									<Button
										className={`px-[16px] py-[8px] w-[263px] h-[42px] inline-flex justify-center items-center ${stockColor}`}
										onClick={() => {
											setValue("Stock");
											setStockColor("bg-[#dae0fe] border-[#2744f6]");
											setState1Color("");
											setState2Color("");
										}}
									>
										<Radio value={"Stock"} />
										<p className="w-[193px] h-[24px] text-[18px] font-medium">
											Stock
										</p>
									</Button>
									<Button
										className={`px-[16px] py-[8px] w-[263px] h-[42px] inline-flex justify-center items-center ${state1Color}`}
										onClick={() => {
											setValue("Stage 1");
											setState1Color("bg-[#dae0fe] border-[#2744f6]");
											setStockColor("");
											setState2Color("");
										}}
									>
										<Radio value={"Stage 1"} />
										<p className="w-[193px] h-[24px] text-[18px] font-medium">
											Stage 1
										</p>
									</Button>
									<Button
										className={`px-[16px] py-[8px] w-[263px] h-[42px] inline-flex justify-center items-center ${state2Color}`}
										onClick={() => {
											setValue("Stage 2");
											setState2Color("bg-[#dae0fe] border-[#2744f6]");
											setStockColor("");
											setState1Color("");
										}}
									>
										<Radio value={"Stage 2"} />
										<p className="w-[193px] h-[24px] text-[18px] font-medium">
											Stage 2
										</p>
									</Button>
								</Radio.Group>
							</div>
							<div className="mb-[0.5rem]">
								{value == "Stage 2" && (
									<>
										<h3 className="text-[24px] font-semibold mb-[0.5rem]">
											Requires
										</h3>
										<p className="mb-[0.5rem] text-[#35424e]">
											Custom Tune Mapping
										</p>
									</>
								)}
							</div>
						</div>
					</div>
					<div className="w-[423px]">
						<div className="p-[16px]">
							<div className="flex justify-center items-center">
								<div className="mb-[0.5rem]">
									<h3 className="font-semibold text-[28px]">{value}</h3>
								</div>
								<div></div>
							</div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailPage;
