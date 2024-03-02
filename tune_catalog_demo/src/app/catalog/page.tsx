"use client";

import React, { useEffect, useState } from "react";
import { Typography, Card, Select } from "antd";
import axios from "axios";
import { Navigate } from "react-router-dom";

const { Title } = Typography;

function CatalogPage() {
	const [makes, setMakes] = useState([]);
	const [years, setYears] = useState([]);
	const [models, setModels] = useState([]);
	const [engines, setEngines] = useState([]);
	const [transmissions, setTransmissions] = useState([]);

	const [showYears, setShowYears] = useState<boolean>(false);
	const [showModels, setShowModels] = useState<boolean>(false);
	const [showEngines, setShowEngines] = useState<boolean>(false);
	const [showTransmissions, setShowTransmissions] = useState<boolean>(false);

	const [selectedMake, setSelectedMake] = useState<number | null>(null);
	const [selectedYear, setSelectedYear] = useState<number | null>(null);
	const [selectedModel, setSelectedModel] = useState<number | null>(null);
	const [selectedEngine, setSelectedEngine] = useState<number | null>(null);
	const [selectedTransmission, setSelectedTransmission] = useState<
		number | null
	>(null);

	const [catalogInfo, setCatalogInfo] = useState<any>(null);

	useEffect(() => {
		axios.get("https://localhost:7137/api/catalogs/makes").then((res) => {
			setMakes(res.data);
		});
	}, []);

	const handleChangeMake = (makeId: number) => {
		setShowYears(true);
		setShowModels(false);
		setShowEngines(false);
		setShowTransmissions(false);

		setSelectedMake(makeId);

		axios
			.get(`https://localhost:7137/api/catalogs/years/${makeId}`)
			.then((res) => {
				setYears(res.data);
			});
	};
	const handleChangeYear = (yearId: number) => {
		setModels([]);
		setEngines([]);
		setTransmissions([]);

		setShowModels(true);
		setShowEngines(false);
		setShowTransmissions(false);

		setSelectedYear(yearId);

		axios
			.get(
				`https://localhost:7137/api/catalogs/models/${selectedMake}/${yearId}`
			)
			.then((res) => {
				setModels(res.data);
			});
	};
	const handleChangeModel = (modelId: number) => {
		setShowEngines(true);
		setShowTransmissions(false);

		setSelectedModel(modelId);

		axios
			.get(
				`https://localhost:7137/api/catalogs/engines/${selectedMake}/${selectedYear}/${modelId}`
			)
			.then((res) => {
				setEngines(res.data);
			});
	};
	const handleChangeEngine = (engineId: number) => {
		setShowTransmissions(true);

		setSelectedEngine(engineId);

		axios
			.get(
				`https://localhost:7137/api/catalogs/transmissions/${selectedMake}/${selectedYear}/${selectedModel}/${engineId}`
			)
			.then((res) => {
				let data = res.data;

				if (data.length === 0) {
					let detail = {
						makes,
						years,
						models,
						engines,
						selectedMake,
						selectedYear,
						selectedModel,
						selectedEngine,
					};
					setCatalogInfo(detail);
				} else {
					setTransmissions(data);
				}
			});
	};
	const handleChangeTransmission = (transmissionId: number) => {
		setSelectedTransmission(transmissionId);

		let detail = {
			makes,
			years,
			models,
			engines,
			selectedMake,
			selectedYear,
			selectedModel,
			selectedEngine,
			selectedTransmission,
		};
		setCatalogInfo(detail);
	};

	return (
		<>
			<div className="container mx-auto mt-[70px] w-[1269px]">
				<Title
					className="font-semibold"
					style={{ fontSize: "48px", fontWeight: 600 }}
				>
					Tune Catalog
				</Title>
				<Card
					className="flex flex-col items-center"
					style={{
						boxShadow:
							"0 4px 15px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.1)",
					}}
				>
					<div>
						<Title level={2} style={{ fontSize: 24 }}>
							Vehicle Selection
						</Title>
						<div>
							<p className="text-[16px] mb-[4px]">Vehicle Make</p>
							<Select
								style={{ width: 568, height: 49, marginBottom: 8 }}
								placeholder="Select Make"
								options={makes}
								onChange={handleChangeMake}
							/>
						</div>
						{showYears && (
							<div>
								<p className="text-[16px] mb-[4px]">Vehicle Year</p>
								<Select
									style={{ width: 568, height: 49, marginBottom: 8 }}
									placeholder="Select Year"
									options={years}
									onChange={handleChangeYear}
								/>
							</div>
						)}
						{showModels && (
							<div>
								<p className="text-[16px] mb-[4px]">Vehicle Model</p>
								<Select
									style={{ width: 568, height: 49, marginBottom: 8 }}
									placeholder="Select Model"
									options={models}
									onChange={handleChangeModel}
								/>
							</div>
						)}
						{showEngines && (
							<div>
								<p className="text-[16px] mb-[4px]">Vehicle Engine</p>
								<Select
									style={{ width: 568, height: 49, marginBottom: 8 }}
									placeholder="Select Engine"
									options={engines}
									onChange={handleChangeEngine}
								/>
							</div>
						)}
						{showTransmissions && (
							<div>
								<p className="text-[16px] mb-[4px]">Vehicle Transmission</p>
								<Select
									style={{ width: 568, height: 49, marginBottom: 8 }}
									placeholder="Select Transmission"
									options={transmissions}
									onChange={handleChangeTransmission}
								/>
							</div>
						)}
					</div>
				</Card>
			</div>
			{catalogInfo && (
				<Navigate to={"/catalog/detail"} replace={true} state={catalogInfo} />
			)}
		</>
	);
}

export default CatalogPage;
