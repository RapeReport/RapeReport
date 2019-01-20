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
    export default {
        data() {
            return {
                data: [
                    {  'name': 'Jesse Simmons', 'date': '2016-10-15 ',},
                    { 'name': 'John Jacobs', 'date': '2016-12-15 ',},
                    { 'name': 'Tina Gilbert', 'date': '2016-04-26 ',},
                    { 'name': 'Clarence Flores', 'date': '2016-04-10'},
                    { 'name': 'Anne Lee', 'date': '2016-12-06 '}
                ],
                columns: [
                  
                    {
                        field: 'name',
                        label: 'Name',
                        meta: 'Name'
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