<template>
    <b-table :data="data" :columns="columns">
        <template slot-scope="props" slot="header">
            <b-tooltip :label="props.column.meta" >
                {{ props.column.label }}
            </b-tooltip>
        </template>
    </b-table>
</template>

<script>
    import json from '@/assets/table.json';
// ....
    json.forEach(x => { console.log(x.name); });
    export default {
        data() {
            return {
                data: [
                    { 'name': 'Jesse Simmons', 'other victims': 0, 'date': '2016-10-15 ',},
                    { 'name': 'John Jacobs', 'other victims': 0, 'date': '2016-12-15 ',},
                    { 'name': 'Tina Gilbert', 'other victims': 0, 'date': '2016-04-26 ',},
                ],
                columns: [
                    {
                        field: 'name',
                        label: 'Name',
                        meta: 'Name'
                    },
                    {
                        field: 'other victims',
                        label: 'Other victims',
                        centered: true,
                        meta: 'Other victims'
                    },
                    {
                        field: 'date',
                        label: 'Date',
                        centered: true,
                        meta: 'Account created date'
                    }
                ]
            }
        }
    }
</script>