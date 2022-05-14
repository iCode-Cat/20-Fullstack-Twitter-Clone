const Flow = require('../../models/Flow');

// @router /api/flow/create
// @desc POST Tweet / flow
module.exports.createFlow = async (req, res) => {
  try {
    const flow = await Flow.create({
      tweet: req.body.tweet,
      userId: req.user.id,
      type: req.body.type,
    });
    res.status(200).json(flow);
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error);
  }
};

// @router /api/flow/:id
// @desc GET Tweet / flow
module.exports.getFlow = async (req, res) => {
  try {
    const flow = await Flow.findOne({ userId: req.params.id });
    if (!flow) return res.status(404).send('Flow not found');
    res.status(200).json(flow);
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error);
  }
};

// @router /api/flow/:id
// @desc DELETE Tweet / flow
module.exports.deleteFlow = async (req, res) => {
  try {
    const flow = await Flow.findOneAndDelete({ _id: req.params.id });
    if (!flow) return res.status(404).send('Flow not found');
    res.status(200).json(flow);
  } catch (error) {
    res.status(500).send('Server Error');
    console.log(error);
  }
};
