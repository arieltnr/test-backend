const memberService = require('../services/memberService');

exports.getAllMembers = async (req, res) => {
  try {
    const members = await memberService.getAllMembers();
    res.json(members);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getMemberById = async (req, res) => {
  try {
    const member = await memberService.getMemberById(req.params.code);
    if (member) {
      res.json(member);
    } else {
      res.status(404).send('Member not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.createMember = async (req, res) => {
  try {
    const member = await memberService.createMember(req.body);
    res.status(201).json(member);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateMember = async (req, res) => {
  try {
    const member = await memberService.updateMember(req.params.code, req.body);
    res.json(member);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
