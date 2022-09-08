<script setup>
    import { reactive } from "vue";
    import Card from "@/Components/Theme/Card.vue";
    // import EasyButton from "@/Components/Theme/Button.vue";
    const data = reactive({
      time: {
        hr: '--',
        min: '--',
        sec: '--'
      },
      active: 'hr'
    });

    const getHr = (hr) => {
      data.time.hr = hr
      data.active = 'min'
    };

    const getMin = (min) => {
      data.time.min = min
      data.active = 'sec'
    };

    const getSec = (sec) => {
      data.time.sec = sec
    };

    </script>

    <template>

      <card outlined class="w-96">
        <template #header>
            <span @click="data.active = 'hr'" class="cursor-pointer"> {{ data.time.hr }} </span>
            :
            <span @click="data.active = 'min'" class="cursor-pointer"> {{ data.time.min }} </span>
            :
            <span @click="data.active = 'sec'" class="cursor-pointer"> {{ data.time.sec }} </span>
            <span>AM</span>
        </template>
        <div class="p-2 overflow-y-auto max-h-[70vh] bg-inherit">
            <div class="relative w-80 h-80 m-auto rounded-full bg-zinc-100 dark:bg-zinc-900 transition duration-200">
                <template v-if="data.active == 'hr'">
                    <div @click="getHr('01')" class="absolute left-[70.00%] top-[09.00%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8" > 1 </div>
                    <div @click="getHr('02')" class="absolute left-[86.00%] top-[25.00%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8" > 2 </div>
                    <div @click="getHr('03')" class="absolute left-[92.00%] top-[47.50%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8" > 3 </div>
                    <div @click="getHr('04')" class="absolute left-[86.50%] top-[70.00%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8" > 4 </div>
                    <div @click="getHr('05')" class="absolute left-[70.00%] top-[86.20%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8" > 5 </div>
                    <div @click="getHr('06')" class="absolute left-[47.40%] top-[92.00%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8" > 6 </div>
                    <div @click="getHr('07')" class="absolute left-[25.50%] top-[86.40%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8" > 7 </div>
                    <div @click="getHr('08')" class="absolute left-[09.00%] top-[70.00%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8" > 8 </div>
                    <div @click="getHr('09')" class="absolute left-[03.00%] top-[47.50%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8" > 9 </div>
                    <div @click="getHr('10')" class="absolute left-[09.00%] top-[25.50%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8" > 10 </div>
                    <div @click="getHr('11')" class="absolute left-[25.50%] top-[09.00%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8" > 11 </div>
                    <div @click="getHr('12')" class="absolute left-[47.40%] top-[03.00%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8" > 12 </div>
                </template>

                <template v-if="data.active == 'min'">
                    <div @click="getMin('05')" class="absolute left-[70.00%] top-[09.00%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">05</div>
                    <div @click="getMin('06')" class="absolute text-center w-2 h-2 left-[75.00%] top-[12.70%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('07')" class="absolute text-center w-2 h-2 left-[78.70%] top-[15.60%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('08')" class="absolute text-center w-2 h-2 left-[81.95%] top-[18.85%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('09')" class="absolute text-center w-2 h-2 left-[84.80%] top-[22.50%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getMin('10')" class="absolute left-[86.00%] top-[25.00%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">10</div>
                    <div @click="getMin('11')" class="absolute text-center w-2 h-2 left-[89.55%] top-[30.70%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('12')" class="absolute text-center w-2 h-2 left-[91.30%] top-[35.00%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('13')" class="absolute text-center w-2 h-2 left-[92.45%] top-[39.55%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('14')" class="absolute text-center w-2 h-2 left-[93.20%] top-[44.15%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getMin('15')" class="absolute left-[92%] top-[47.5%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">15</div>
                    <div @click="getMin('16')" class="absolute text-center w-2 h-2 left-[93.20%] top-[53.45%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('17')" class="absolute text-center w-2 h-2 left-[92.45%] top-[58.00%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('18')" class="absolute text-center w-2 h-2 left-[91.20%] top-[62.50%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('19')" class="absolute text-center w-2 h-2 left-[89.55%] top-[66.90%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getMin('20')" class="absolute left-[86.5%] top-[70%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">20</div>
                    <div @click="getMin('21')" class="absolute text-center w-2 h-2 left-[84.80%] top-[75.00%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('22')" class="absolute text-center w-2 h-2 left-[81.95%] top-[78.70%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('23')" class="absolute text-center w-2 h-2 left-[78.70%] top-[81.95%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('24')" class="absolute text-center w-2 h-2 left-[75.00%] top-[84.80%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getMin('25')" class="absolute left-[70%] top-[86.2%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">25</div>
                    <div @click="getMin('26')" class="absolute text-center w-2 h-2 top-[93.20%] left-[53.45%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('27')" class="absolute text-center w-2 h-2 top-[92.45%] left-[58.00%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('28')" class="absolute text-center w-2 h-2 top-[91.20%] left-[62.50%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('29')" class="absolute text-center w-2 h-2 top-[89.55%] left-[66.90%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getMin('30')" class="absolute left-[47.4%] top-[92%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">30</div>
                    <div @click="getMin('31')" class="absolute text-center w-2 h-2 top-[89.55%] left-[30.70%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('32')" class="absolute text-center w-2 h-2 top-[91.30%] left-[35.00%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('33')" class="absolute text-center w-2 h-2 top-[92.45%] left-[39.55%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('34')" class="absolute text-center w-2 h-2 top-[93.20%] left-[44.15%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getMin('35')" class="absolute left-[25.5%] top-[86.4%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">35</div>
                    <div @click="getMin('36')" class="absolute text-center w-2 h-2 top-[75.00%] left-[12.70%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('37')" class="absolute text-center w-2 h-2 top-[78.70%] left-[15.60%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('38')" class="absolute text-center w-2 h-2 top-[81.95%] left-[18.85%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('39')" class="absolute text-center w-2 h-2 top-[84.80%] left-[22.50%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getMin('40')" class="absolute left-[9%] top-[70%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">40</div>
                    <div @click="getMin('41')" class="absolute text-center w-2 h-2 top-[53.43%] left-[4.35%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('42')" class="absolute text-center w-2 h-2 top-[58.05%] left-[5.10%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('43')" class="absolute text-center w-2 h-2 top-[62.61%] left-[6.25%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('44')" class="absolute text-center w-2 h-2 top-[66.96%] left-[7.95%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getMin('45')" class="absolute left-[3%] top-[47.5%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">45</div>
                    <div @click="getMin('46')" class="absolute text-center w-2 h-2 top-[30.70%] left-[7.95%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('47')" class="absolute text-center w-2 h-2 top-[35.00%] left-[6.25%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('48')" class="absolute text-center w-2 h-2 top-[39.55%] left-[5.10%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('49')" class="absolute text-center w-2 h-2 top-[44.15%] left-[4.35%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getMin('50')" class="absolute left-[9%] top-[25.5%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">50</div>
                    <div @click="getMin('51')" class="absolute text-center w-2 h-2 left-[12.70%] top-[22.50%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('52')" class="absolute text-center w-2 h-2 left-[15.60%] top-[18.85%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('53')" class="absolute text-center w-2 h-2 left-[18.85%] top-[15.60%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('54')" class="absolute text-center w-2 h-2 left-[22.50%] top-[12.70%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getMin('55')" class="absolute left-[25.5%] top-[9%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">55</div>
                    <div @click="getMin('56')" class="absolute text-center w-2 h-2 left-[30.70%] top-[07.95%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('57')" class="absolute text-center w-2 h-2 left-[35.00%] top-[06.25%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('58')" class="absolute text-center w-2 h-2 left-[39.55%] top-[05.10%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('59')" class="absolute text-center w-2 h-2 left-[44.15%] top-[04.35%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getMin('00')" class="absolute left-[47.4%] top-[3%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">00</div>
                    <div @click="getMin('01')" class="absolute text-center w-2 h-2 left-[53.43%] top-[04.35%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('02')" class="absolute text-center w-2 h-2 left-[58.05%] top-[05.10%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('03')" class="absolute text-center w-2 h-2 left-[62.61%] top-[06.25%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getMin('04')" class="absolute text-center w-2 h-2 left-[66.96%] top-[07.95%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                </template>

                <template v-if="data.active == 'sec'">
                    <div @click="getSec('05')" class="absolute left-[70.00%] top-[09.00%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">05</div>
                    <div @click="getSec('06')" class="absolute text-center w-2 h-2 left-[75.00%] top-[12.70%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('07')" class="absolute text-center w-2 h-2 left-[78.70%] top-[15.60%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('08')" class="absolute text-center w-2 h-2 left-[81.95%] top-[18.85%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('09')" class="absolute text-center w-2 h-2 left-[84.80%] top-[22.50%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getSec('10')" class="absolute left-[86.00%] top-[25.00%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">10</div>
                    <div @click="getSec('11')" class="absolute text-center w-2 h-2 left-[89.55%] top-[30.70%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('12')" class="absolute text-center w-2 h-2 left-[91.30%] top-[35.00%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('13')" class="absolute text-center w-2 h-2 left-[92.45%] top-[39.55%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('14')" class="absolute text-center w-2 h-2 left-[93.20%] top-[44.15%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getSec('15')" class="absolute left-[92%] top-[47.5%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">15</div>
                    <div @click="getSec('16')" class="absolute text-center w-2 h-2 left-[93.20%] top-[53.45%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('17')" class="absolute text-center w-2 h-2 left-[92.45%] top-[58.00%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('18')" class="absolute text-center w-2 h-2 left-[91.20%] top-[62.50%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('19')" class="absolute text-center w-2 h-2 left-[89.55%] top-[66.90%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getSec('20')" class="absolute left-[86.5%] top-[70%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">20</div>
                    <div @click="getSec('21')" class="absolute text-center w-2 h-2 left-[84.80%] top-[75.00%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('22')" class="absolute text-center w-2 h-2 left-[81.95%] top-[78.70%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('23')" class="absolute text-center w-2 h-2 left-[78.70%] top-[81.95%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('24')" class="absolute text-center w-2 h-2 left-[75.00%] top-[84.80%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getSec('25')" class="absolute left-[70%] top-[86.2%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">25</div>
                    <div @click="getSec('26')" class="absolute text-center w-2 h-2 top-[93.20%] left-[53.45%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('27')" class="absolute text-center w-2 h-2 top-[92.45%] left-[58.00%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('28')" class="absolute text-center w-2 h-2 top-[91.20%] left-[62.50%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('29')" class="absolute text-center w-2 h-2 top-[89.55%] left-[66.90%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getSec('30')" class="absolute left-[47.4%] top-[92%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">30</div>
                    <div @click="getSec('31')" class="absolute text-center w-2 h-2 top-[89.55%] left-[30.70%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('32')" class="absolute text-center w-2 h-2 top-[91.30%] left-[35.00%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('33')" class="absolute text-center w-2 h-2 top-[92.45%] left-[39.55%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('34')" class="absolute text-center w-2 h-2 top-[93.20%] left-[44.15%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getSec('35')" class="absolute left-[25.5%] top-[86.4%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">35</div>
                    <div @click="getSec('36')" class="absolute text-center w-2 h-2 top-[75.00%] left-[12.70%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('37')" class="absolute text-center w-2 h-2 top-[78.70%] left-[15.60%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('38')" class="absolute text-center w-2 h-2 top-[81.95%] left-[18.85%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('39')" class="absolute text-center w-2 h-2 top-[84.80%] left-[22.50%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getSec('40')" class="absolute left-[9%] top-[70%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">40</div>
                    <div @click="getSec('41')" class="absolute text-center w-2 h-2 top-[53.43%] left-[4.35%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('42')" class="absolute text-center w-2 h-2 top-[58.05%] left-[5.10%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('43')" class="absolute text-center w-2 h-2 top-[62.61%] left-[6.25%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('44')" class="absolute text-center w-2 h-2 top-[66.96%] left-[7.95%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getSec('45')" class="absolute left-[3%] top-[47.5%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">45</div>
                    <div @click="getSec('46')" class="absolute text-center w-2 h-2 top-[30.70%] left-[7.95%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('47')" class="absolute text-center w-2 h-2 top-[35.00%] left-[6.25%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('48')" class="absolute text-center w-2 h-2 top-[39.55%] left-[5.10%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('49')" class="absolute text-center w-2 h-2 top-[44.15%] left-[4.35%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getSec('50')" class="absolute left-[9%] top-[25.5%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">50</div>
                    <div @click="getSec('51')" class="absolute text-center w-2 h-2 left-[12.70%] top-[22.50%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('52')" class="absolute text-center w-2 h-2 left-[15.60%] top-[18.85%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('53')" class="absolute text-center w-2 h-2 left-[18.85%] top-[15.60%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('54')" class="absolute text-center w-2 h-2 left-[22.50%] top-[12.70%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getSec('55')" class="absolute left-[25.5%] top-[9%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">55</div>
                    <div @click="getSec('56')" class="absolute text-center w-2 h-2 left-[30.70%] top-[07.95%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('57')" class="absolute text-center w-2 h-2 left-[35.00%] top-[06.25%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('58')" class="absolute text-center w-2 h-2 left-[39.55%] top-[05.10%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('59')" class="absolute text-center w-2 h-2 left-[44.15%] top-[04.35%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>

                    <div @click="getSec('00')" class="absolute left-[47.4%] top-[3%] text-center w-4 h-4 rounded-full cursor-pointer text-xs hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:ring-4 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-8">00</div>
                    <div @click="getSec('01')" class="absolute text-center w-2 h-2 left-[53.43%] top-[04.35%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('02')" class="absolute text-center w-2 h-2 left-[58.05%] top-[05.10%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('03')" class="absolute text-center w-2 h-2 left-[62.61%] top-[06.25%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                    <div @click="getSec('04')" class="absolute text-center w-2 h-2 left-[66.96%] top-[07.95%] hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-full cursor-pointer text-xs hover:ring-2 hover:ring-zinc-200 dark:hover:ring-zinc-800 ease-in-out duration-200 active:ring-4"></div>
                </template>
            </div>
        </div>
      </card>
    </template>
