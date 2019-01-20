<template>
    <b-table :data="tableData" :columns="columns">
        <template slot-scope="props" slot="header">
            <b-tooltip :label="props.column.meta" >
                {{ props.column.label }}
            </b-tooltip>
        </template>
    </b-table>
</template>

<script>
    
    export default {
        props: {
            tableData:{
                type: Array
            }
        },
        data() {
            return {

                data: [
               
                ],
                columns: [
                     {
                        field: 'Assailant',
                        label: 'Assailant',
                        meta: 'Name'
                    },
                    {
                        field: 'num_victims',
                        label: 'Other victims',
                        centered: true,
                        meta: 'Other victims'
                    },
                    {
                        field: 'DateOfIncident',
                        label: 'Date',
                        centered: true,
                        meta: 'Account created date'
                    }
                ]
            }
        }
    }
</script>