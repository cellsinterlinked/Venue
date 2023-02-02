
const HttpError = require('../models/http-error');
const Month = require('../models/month');


const createMonth = async (req, res, next) => {
    
    const {monthProp, yearProp} = req.body



    const monthStrings = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayStrings = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const date = new Date(yearProp, monthProp, 1)
    const monthString = monthStrings[date.getMonth()]
    const month = date.getMonth()
    const year = date.getFullYear()

 
    const altMonth = month + 1

    const daysInMonth  = (month, year) => {
        return new Date(year, month, 0).getDate()
    }
    
    const firstDayOfMonth = (year, month) => {
        let datenew =  new Date(year, month, 1)
        let dateIndex = datenew.getDay()
        return dayStrings[dateIndex]
    }


    let content = []
    let totalDays = daysInMonth(altMonth, year) + 1

    let firstDay = firstDayOfMonth(year, month)
    
    if (firstDay === "Monday") {
        content = [{name: "" ,num:0, status:"none" }, ...content]
    } 
    if (firstDay === "Tuesday") {
        content = [{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" }, ...content]
    } 
    if (firstDay === "Wednesday") {
        content = [{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" }, ...content]
    }
    if (firstDay === "Thursday") {
        content = [{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" }, ...content]
    }

    if (firstDay === "Friday") {
        content = [{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" }, ...content]
    }

    if (firstDay === "Saturday") {
        content = [{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" }, ...content]
    }

    for(let i = 1; i < totalDays; i++) {
        content.push({name: "", num:i, status: true})
    }

    

    const createdMonth = new Month({
        month: month,
        year: year,
        monthString: monthString,
        days: content
    })

    try {
        await createdMonth.save()
    } catch (err) {
        const error = new HttpError(err, 401);
        return next(error);
    }

    res.status(201).json({
        message: 'month created', date: date
    })
}



const getAllMonths = async (req, res, next) => {
    let months;

    try {
        months = await Month.find({})
    } catch (err) {
        const error = new HttpError('getting calendar failed', 500)
        return next (error)
    }

    res.json({ months: months.map((user) => user.toObject({getters: true})) });
}



const createNextMonth = async (req, res, next) => {
    let months;

    try {
        months = await Month.find({})
    } catch (err) {
        const error = new HttpError('getting calendar failed', 500)
        return next (error)
    }

    const lastMonth = months[months.length - 1]
    let monthProp
    let yearProp
    
    if (lastMonth.month === 11) {
        monthProp = 0
        yearProp = lastMonth.year + 1
    } else {
        monthProp = lastMonth.month + 1
        yearProp = lastMonth.year
    }




    const monthStrings = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const dayStrings = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    const date = new Date(yearProp, monthProp, 1)
    const monthString = monthStrings[date.getMonth()]
    const month = date.getMonth()
    const year = date.getFullYear()

    altMonth = month + 1

    const daysInMonth  = (month, year) => {
        return new Date(year, month, 0).getDate()
    }
    
    const firstDayOfMonth = (year, month) => {
        let datenew =  new Date(year, month, 1)
        let dateIndex = datenew.getDay()
        return dayStrings[dateIndex]
    }
    

    let content = []
    let totalDays = daysInMonth(altMonth, year) + 1

    let firstDay = firstDayOfMonth(year, month)
    
    if (firstDay === "Monday") {
        content = [{name: "" ,num:0, status:"none" }, ...content]
    } 
    if (firstDay === "Tuesday") {
        content = [{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" }, ...content]
    } 
    if (firstDay === "Wednesday") {
        content = [{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" }, ...content]
    }
    if (firstDay === "Thursday") {
        content = [{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" }, ...content]
    }

    if (firstDay === "Friday") {
        content = [{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" }, ...content]
    }

    if (firstDay === "Saturday") {
        content = [{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" },{name: "" ,num:0, status:"none" }, ...content]
    }

    for(let i = 1; i < totalDays; i++) {
        content.push({name: "", num:i, status: true})
    }

    

    const createdMonth = new Month({
        month: month,
        year: year,
        monthString: monthString,
        days: content
    })

    try {
        await createdMonth.save()
    } catch (err) {
        const error = new HttpError(err, 401);
        return next(error);
    }

    res.status(201).json({
        message: 'month created'
    })
    
}

const editMonth = async (req, res, next) => {

    const {updatedMonth} = req.body
    const id = updatedMonth.id
   

let month;
try {
month = await Month.findById(id)
} catch (err) {
    const error = new HttpError(
        'Could not fetch this month', 500
    )
    return next (error)
}

month.days = updatedMonth.days

try {
    await month.save()
} catch (err) {
    const error = new HttpError('Could not update month.', 500);
    return next(error);
}

res.status(200).json({ month: month.toObject({ getters: true }) });


}


exports.createMonth = createMonth
exports.getAllMonths = getAllMonths
exports.createNextMonth = createNextMonth
exports.editMonth = editMonth