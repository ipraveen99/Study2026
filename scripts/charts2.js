google.charts.load('current', {'packages':['corechart', 'bar', 'calendar', 'orgchart']});
            google.charts.setOnLoadCallback(drawChart);
      
            function drawChart() {

              var bardata = google.visualization.arrayToDataTable([
                ['City', '2020 Population', '2024 Population'],
                ['New York City, NY', 8175000, 8008000],
                ['Los Angeles, CA', 3792000, 3694000],
                ['Chicago, IL', 2695000, 2896000],
                ['Houston, TX', 2099000, 1953000],
                ['Philadelphia, PA', 1526000, 1517000]
              ]);
        
              var baroptions = {
                title: 'Population of Largest U.S. Cities',
                chartArea: {width: '100%', height: '100%'},
                isStacked: true,
                chartArea:{
                  left:0,
                  top: 0,
                  bottom:20,
                  right:0,
                  // width: '600',
                  // height: '350',
                  },
                hAxis: {
                  title: 'Total Population',
                  minValue: 0,
                },
                legend: { position: 'none', maxLines: 1 , textStyle: {color: 'gray', fontSize: 11}},
                bar: {groupWidth: "74%"},
                bars: 'horizontal' ,// Required for Material Bar Charts.
                colors: ['#C5CF61', '#75A19E', '#A3714E', '#52526C', '#7A70BA'],
                vAxis: {
                  title: 'City'
                }
              };
      
              var chart = new google.charts.Bar(document.getElementById('barcharts'));
      
              chart.draw(bardata, google.charts.Bar.convertOptions(baroptions));


/*------------------------*/

            var dondata = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Work',     11],
                ['Eat',      2],
                ['Commute',  2],
                ['Watch TV', 2],
                ['Sleep',    7]
            ]);

            var donoptions = {
                title: 'My Daily Activities',
                pieHole: 0.4,
                chartArea:{
                    left:0,
                    top: 0,
                    bottom:0,
                    right:0,
                    width: '100%',
                    height: '250',
                    },
                colors: ['#C5CF61', '#75A19E', '#A3714E', '#52526C', '#7A70BA'],
                //is3D: true,
            };

            var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
            chart.draw(dondata, donoptions);

/*------------------*/

            var piedata = google.visualization.arrayToDataTable([
                ['income', 'Cash (in millions)'],
                ['Days', 30], ['Cash', 20], ['Expense', 10],['Expense', 5],
                // ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300],
                // ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],
                // ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],
                // ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],
                // ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],
                // ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]
              ]);
      
              var pieoptions = {
                title: 'Indian Language Use',
                legend: 'bottom',
                chartArea:{
                    left:10,
                    top: 10,
                    bottom:20,
                    right:10,
                    width: '100%',
                    height: '210',
                    },
                colors: ['#A3714E', '#75A19E', '#C5CF61', '#52526C', '#f96459'],
                // pieSliceText: 'label',
                // slices: {  1: {offset: 0.032},
                //           2: {offset: 0.033},
                          // 14: {offset: 0.4},
                          // 15: {offset: 0.5},
                // },
              };
      
              var chart = new google.visualization.PieChart(document.getElementById('piechart'));
              chart.draw(piedata, pieoptions);


                /*----------------------------------------*/

                var colum_1_data = google.visualization.arrayToDataTable([
                    ['Year', 'Sales', 'Expenses', 'Profit'],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350],
                    ['2014', 1000, 400, 200],
                    ['2015', 1170, 460, 250],
                    ['2016', 660, 1120, 300],
                    ['2017', 1030, 540, 350]
                  ]);
          
                var colum_1_options = {
                  title: 'Motivation and Energy Level Throughout the Day',
                  chartArea:{
                    left:0,
                    top: 0,
                    bottom:20,
                    right:0,
                    width: '100%',
                    height: '250',
                    },
                  colors: ['#75A19E', '#A3714E', '#52526C', '#7A70BA'],
                  annotations: {
                    alwaysOutside: true,
                    textStyle: {
                      fontSize: 14,
                      color: '#000',
                      auraColor: 'none',
                      bar: {groupWidth: "75%"},
                    }
                  },
                  hAxis: {
                    title: 'Time of Day',
                    format: 'h:mm a',
                    viewWindow: {
                      min: [7, 30, 0],
                      max: [17, 30, 0]
                    }
                  },
                  vAxis: {
                    title: 'Rating (scale of 1-10)'
                  }
                };
          
                var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
                chart.draw(colum_1_data, colum_1_options);


                /*----------------------------------------------*/

      var basicclm_data = new google.visualization.DataTable();
      basicclm_data.addColumn('timeofday', 'Time of Day');
      basicclm_data.addColumn('number', 'Motivation Level');

      basicclm_data.addRows([
        [{v: [8, 0, 0], f: '8 am'}, 1],
        [{v: [9, 0, 0], f: '9 am'}, 2],
        [{v: [10, 0, 0], f:'10 am'}, 3] ,
        [{v: [11, 0, 0], f: '11 am'}, 4],
        [{v: [12, 0, 0], f: '12 pm'}, 5],
        [{v: [13, 0, 0], f: '1 pm'}, 6],
        [{v: [14, 0, 0], f: '2 pm'}, 7],
        [{v: [15, 0, 0], f: '3 pm'}, 8],
        [{v: [16, 0, 0], f: '4 pm'}, 9],
        [{v: [17, 0, 0], f: '5 pm'}, 10],
      ]);

      var basicclm_options = {
        title: 'Motivation Level Throughout the Day',
        colors: ['#7A70BA'],
        chartArea:{
            left:0,
            top: 0,
            bottom:20,
            right:0,
            width: '100%',
            height: '250',
            },
        hAxis: {
          title: 'Time of Day',
          format: 'h:mm a',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('columbasic'));

      chart.draw(basicclm_data, basicclm_options);


      /*----------------------------*/


      var trenddata = google.visualization.arrayToDataTable([
        ['Generation', 'Descendants'],
        [0, 1], [1, 33], [2, 269], [3, 2013]
     ]);
    
      var trendoptions = {
        title: 'Descendants by Generation',
        hAxis: {title: 'Generation', minValue: 0, maxValue: 3},
        vAxis: {title: 'Descendants', minValue: 0, maxValue: 2100},
        chartArea:{
          left:0,
          top: 0,
          bottom:0,
          right:0,
          width: '100%',
          height: '250',
          },
        trendlines: {
          0: {
            type: 'exponential',
            visibleInLegend: true,
            color: '#75A19E'
          }
        }
      };
    
      var chart = new google.visualization.ScatterChart(document.getElementById('trendilinechart'));
      chart.draw(trenddata, trendoptions);

      /*--------------------------------*/

    }



  






                
            


               