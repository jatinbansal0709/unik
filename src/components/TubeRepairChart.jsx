import React from 'react';

const TubeRepairChart = () => {
    const sections = [
        {
            title: "ROUND 2-WAY TUBE REPAIRS",
            headers: ["Description", "Pouch Qty.", "Dim. (Inch.)", "Dim. (Mm)"],
            rows: [
                ["Cycle Round", "100", "1", "25"],
                ["Tiny Round", "100", "1", "25"],
                ["Mini Round", "50", "1 3/8", "35"],
                ["Small Round", "40", "2 1/4", "60"],
                ["Medium Round", "30", "1 3/4", "45"],
                ["Large Round", "20", "3 1/8", "80"],
                ["Maxi Round", "20", "4 15/16", "100"],
                ["Giant Round", "10", "5", "125"],
            ]
        },
        {
            title: "OVAL 2-WAY TUBE REPAIRS",
            headers: ["Description", "Pouch Qty.", "Dim. (Inch.)", "Dim. (Mm)"],
            rows: [
                ["Mini Oval", "50", "1 1/2 X 1 1/8", "40 X 30"],
                ["Small Oval", "30", "2 1/4 X 1 1/2", "65 X 40"],
                ["Medium Oval", "20", "4 X 2", "100 X 50"],
                ["Large Oval", "20", "6 X 2 3/4", "150 X 70"],
                ["Giant Oval", "10", "6 1/2 X 4", "160 X 100"],
                ["Giant Rim", "10", "9 1/2 X 2 1/4", "240 X 60"],
            ]
        },
        {
            title: "CYCLE PUNCTURE STRIPS AND SHEETS",
            headers: ["Description", "Box Qty.", "Dim. (Inch.)", "Dim. (Mm)"],
            rows: [
                ["Cycle Sheet", "5", "13 X 10", "330 X 254"],
                ["Cycle Strip", "5", "4 15/16 X 3 3/4", "125 X 95"],
            ]
        }
    ];

    return (
        <div className="space-y-8 mt-12">
            {sections.map((section, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-gray-800 bg-unik-dark-grey">
                    <div className="bg-unik-red py-3 px-4 text-center">
                        <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                            {section.title}
                        </h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-300">
                            <thead className="bg-gray-900/50 text-xs uppercase text-gray-400">
                                <tr>
                                    {section.headers.map((header, idx) => (
                                        <th key={idx} className="px-6 py-4 font-bold tracking-wider border-b border-gray-800">
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                {section.rows.map((row, rowIdx) => (
                                    <tr key={rowIdx} className="hover:bg-white/5 transition-colors">
                                        {row.map((cell, cellIdx) => (
                                            <td key={cellIdx} className={`px-6 py-4 whitespace-nowrap ${cellIdx === 0 ? 'font-medium text-white' : ''}`}>
                                                {cell}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TubeRepairChart;
