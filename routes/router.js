router.put("/api/workouts/:id", (req, res) => {
    const exerciseId = req.params.id
    const exerciseObj = req.body
    db.findByIdAndUpdate({_id: exerciseId},{$push: { exercises: exerciseObj }})
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(error => {
            res.status(400).json(error);
        });
        console.log("id", exerciseId)
        console.log("obj", exerciseObj)
  });