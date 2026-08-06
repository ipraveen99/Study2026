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
                ['Days', 30], ['Cash', 20], ['Expense', 10],
                // ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300],
                // ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],
                // ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],
                // ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],
                // ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],
                // ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]
              ]);
      
              var pieoptions = {
                title: 'Indian Language Use',
                legend: 'none',
                chartArea:{
                    left:10,
                    top: 10,
                    bottom:10,
                    right:10,
                    width: '100%',
                    height: '250',
                    },
                colors: ['#eeeeee', '#75A19E', '#C5CF61', '#52526C', '#7A70BA'],
                pieSliceText: 'label',
                slices: {  1: {offset: 0.032},
                          2: {offset: 0.033},
                          // 14: {offset: 0.4},
                          // 15: {offset: 0.5},
                },
              };
      
              var chart = new google.visualization.PieChart(document.getElementById('piechart'));
              chart.draw(piedata, pieoptions);

/*--------------------------------------*/

var dataTable = new google.visualization.DataTable();
                dataTable.addColumn({ type: 'date', id: 'Date' });
                dataTable.addColumn({ type: 'number', id: 'Won/Loss' });
                dataTable.addRows([
                   [ new Date(2023, 3, 13), 37032 ],
                   [ new Date(2023, 3, 14), 38024 ],
                   [ new Date(2023, 3, 15), 38024 ],
                   [ new Date(2023, 3, 16), 38108 ],
                   [ new Date(2023, 3, 17), 38229 ],
                   [ new Date(2023, 3, 16), 38108 ],
                   [ new Date(2023, 3, 17), 38229 ],
                   // Many rows omitted for brevity.
                //    [ new Date(2024, 9, 4), 38177 ],
                //    [ new Date(2024, 9, 5), 38705 ],
                //    [ new Date(2024, 9, 12), 38210 ],
                //    [ new Date(2024, 9, 13), 38029 ],
                //    [ new Date(2024, 9, 19), 38823 ],
                //    [ new Date(2024, 9, 23), 38345 ],
                //    [ new Date(2024, 9, 24), 38436 ],
                //    [ new Date(2024, 9, 30), 38447 ]
                 ]);
         
                var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));
         
                var calnderoptions = {
                  title: "Festival Attendance",
                  //height: 350,
                  calendar: { 
                    monthLabel: {
                        // fontName: 'Times-Roman',
                        //fontSize: 8,
                        color: '#52526C',
                       // bold: true,
                        ///italic: true
                      },
                   },
                };
         
                chart.draw(dataTable, calnderoptions);

                /*----------------------------------------*/

                var colum_1_data = new google.visualization.DataTable();
                colum_1_data.addColumn('timeofday', 'Time of Day');
                colum_1_data.addColumn('number', 'Motivation Level');
                colum_1_data.addColumn({type: 'string', role: 'annotation'});
                colum_1_data.addColumn('number', 'Energy Level');
                colum_1_data.addColumn({type: 'string', role: 'annotation'});
          
                colum_1_data.addRows([
                  [{v: [8, 0, 0], f: '8 am'},   1, '1',  .25, '.2'],
                  [{v: [9, 0, 0], f: '9 am'},   2, '2',   .5, '.5'],
                  [{v: [10, 0, 0], f:'10 am'},  3, '3',    1,  '1'],
                  [{v: [11, 0, 0], f: '11 am'}, 4, '4', 2.25,  '2'],
                  [{v: [12, 0, 0], f: '12 pm'}, 5, '5', 2.25,  '2'],
                  [{v: [13, 0, 0], f: '1 pm'},  6, '6',    3,  '3'],
                  [{v: [14, 0, 0], f: '2 pm'},  7, '7', 3.25,  '3'],
                  [{v: [15, 0, 0], f: '3 pm'},  8, '8',    5,  '5'],
                  [{v: [16, 0, 0], f: '4 pm'},  9, '9',  6.5,  '6'],
                  [{v: [17, 0, 0], f: '5 pm'}, 10, '10',  10, '10'],
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
                      auraColor: 'none'
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

      /*--------------------------------------------*/

      var linedata = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2004',  1000,      400],
        ['2005',  1170,      460],
        ['2006',  660,       1120],
        ['2007',  1030,      540]
      ]);

      var line_options = {
        title: 'Company Performance',
        curveType: 'function',
        chartArea:{
            left:0,
            top: 0,
            bottom:20,
            right:0,
            width: '100%',
            height: '250',
            },
        colors: ['#A3714E', '#52526C', '#7A70BA'],
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(linedata, line_options);

      /*----------------*/

      var stepdata = google.visualization.arrayToDataTable([
        ['Director (Year)',  'Rotten Tomatoes', 'IMDB'],
        ['Alfred Hitchcock (1935)', 8.4,         7.9],
        ['Ralph Thomas (1959)',     6.9,         6.5],
        ['Don Sharp (1978)',        6.5,         6.4],
        ['James Hawes (2008)',      4.4,         6.2]
      ]);

      var stepoptions = {
        title: 'The decline of \'The 39 Steps\'',
        vAxis: {title: 'Accumulated Rating'},
        isStacked: true,
        colors: ['#A3714E', '#52526C', '#7A70BA'],
        chartArea:{
          left:0,
          top: 0,
          bottom:20,
          right:0,
          width: '100%',
          height: '250',
          },
      };

      var chart = new google.visualization.SteppedAreaChart(document.getElementById('stepchart'));

      chart.draw(stepdata, stepoptions);


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

      var orgdata = new google.visualization.DataTable();
      orgdata.addColumn('string', 'Name');
      orgdata.addColumn('string', 'Manager');
      orgdata.addColumn('string', 'ToolTip');

      // For each orgchart box, provide the name, manager, and tooltip to show.
      orgdata.addRows([
        [{'v':'Mike', 'f':'Mike<div style="color:red; font-style:italic">President</div>'},
         '', 'The President'],
        [{'v':'Jim', 'f':'Jim<div style="color:red; font-style:italic">Vice President</div>'},
         'Mike', 'VP'],
        ['Alice', 'Mike', ''],
        ['Bob', 'Jim', 'Bob Sponge'],
        ['Carol', 'Bob', '']
      ]);

      // Create the chart.
      var chart = new google.visualization.OrgChart(document.getElementById('orgchart'));
      // Draw the chart, setting the allowHtml option to true for the tooltips.
      chart.draw(orgdata, {'allowHtml':true});

    }



  






                
            


               