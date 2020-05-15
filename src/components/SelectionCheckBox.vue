<template>
    <div class="checkbox"> 
        <header><h1>Meal Selection</h1></header>
        <p>Please indicate the days and meals that you require this semester.</p>

        <form action="/action_page.php" method="get" id="form1">
            <table>
                <tr><th>&nbsp;</th>
                    <th><p>Monday</p></th>
                    <th><p>Tuesday</p></th>
                    <th><p>Wednesday</p></th>
                    <th><p>Thursday</p></th>
                    <th><p>Friday</p></th></tr>
            
                <tr><td><p>Breakfast</p></td>
                    <td><input type="checkbox" onclick=incrementCost() name="Monday" value="breakfast" /></td>
                <td><input type="checkbox" onclick=incrementCost() name="Tuesday" value="breakfast" /></td>
                <td><input type="checkbox" onclick=incrementCost() name="Wednesday" value="breakfast" /></td>
                <td><input type="checkbox" onclick=incrementCost() name="Thursday" value="breakfast" /></td>
                <td><input type="checkbox" onclick=incrementCost() name="Friday" value="breakfast" /></td></tr>
                
                <tr><td><p>Dinner</p></td>
                    <td><input type="checkbox" onclick=incrementCost().call() name="Monday" value="dinner" /></td>
                    <td><input type="checkbox" onclick=incrementCost().call() name="Tuesday" value="dinner" /></td>
                    <td><input type="checkbox" onclick=incrementCost() name="Wednesday" value="dinner" /></td>
                    <td><input type="checkbox" onclick=incrementCost() name="Thursday" value="dinner" /></td>
                    <td><input type="checkbox" onclick=incrementCost() name="Friday" value="dinner" /></td></tr>
                
                </table>
            
        <p> Total amount: <span id="cost"></span> </p>
        <button type="submit" form="form1" value="Submit">Submit</button></form>
    </div>
</template>

<script>


export default {
    name: "SelectionCheckBox"
}
</script>

<style>
    table {
        margin-left:35%;
        margin-right:35%;
        border: 2px solid black;
        padding: 5px;
        width: 30%;
    }

    .checkbox {
        border: 5px solid black;
        padding: 30px;
    }
</style>