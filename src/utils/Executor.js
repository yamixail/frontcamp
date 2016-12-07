export function Command(execute, undo, state) {
    this.execute = execute;
    this.undo = undo;
    this.state = state;
}

export default class Executor {
  constructor() {
    this.commandsList = new Map;
  }
  
  register(name, command) {
    if (this.commandsList.has(name)) {
      throw new Error('Command already exists!');
    }

    this.commandsList.set(name, command);
    
    return this;
  }
  
  execute(commandName) {
    if (!this.commandsList.has(commandName)) {
      throw new Error('Command not found!');
    }

    const command = this.commandsList.get(commandName);
    command.state = command.execute(command.state);
    
    return this;
  }
  
  undo(commandName) {
    if (!this.commandsList.has(commandName)) {
      throw new Error('No such command!');
    }

    const command = this.commandsList.get(commandName);
    command.state = command.undo(command.state);
    
    return this;
  }
  
  unregister(commandName) {
    if (this.commandsList.has(commandName)) {
      this.commandsList.delete(commandName);
    }
    
    return this;
  }
}