import Chart from 'react-apexcharts';

const BarChart = () => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    const mockData = {
        labels: {
            categories: ['Barry Allen', 'Sara Connor', 'Gandalf Cinzento', 'Frodo Baggins', 'Bilbo Baggins',
                'Samwise Gamgee', 'Peregrin Took', 'Gimli', 'Arwen Undómiel', 'Aragorn']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1, 10.1, 5.01, 80.25, 100, 90.30, 95]
            }
        ]
    };

    return (
        <Chart
            options={{ ...options, xaxis: mockData.labels }}
            series={mockData.series}
            type="bar"
            height="240"

        />
    );
}

export default BarChart;