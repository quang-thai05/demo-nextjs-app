"use client";

import { Typography, Card, Select, Button } from "antd";

import style from "@/app/catalog/detail/detail.module.css";
import { useState } from "react";
import Link from "next/link";

const { Title } = Typography;

const filterOption = (
	input: string,
	option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

function GuidePage() {
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
						showSearch
						className="text-[18px] font-medium"
						variant="borderless"
						placeholder="Select Year"
						optionFilterProp="children"
						filterOption={filterOption}
					/>
					{" / "}
					<Select
						showSearch
						className="text-[18px] font-medium"
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
					<Button className="mx-[8px] my-[8px] px-[16px] py-[4px] text-[18px] font-semibold inline-flex items-center justify-center">
						<Link href={"/catalog/detail"}>ECU Tunes</Link>
					</Button>
					<Button
						className="mx-[8px] my-[8px] px-[16px] py-[4px] bg-[#dae0fe] border-[#2744f6] text-[18px] font-semibold
											inline-flex items-center justify-center"
					>
						<Link href={"/guide"}>Technical Details</Link>
					</Button>
				</div>

				<div
					className="bg-[#f6f7ff] px-[16px] py-[8px]"
					style={{
						borderBottom: "1px solid #dae0fe",
					}}
				>
					<span className="text-[24px] font-semibold">ECU Guide</span>
				</div>

				<div className="flex justify-center items-center py-[32px] px-[16px]">
					<span className="text-[18px] font-semibold">No Guide found.</span>
				</div>
			</div>
		</div>
	);
}

export default GuidePage;
